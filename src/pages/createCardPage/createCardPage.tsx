import { S } from './createCardPage.styles.ts'
import { Page } from 'src/shared/ui/page/page.tsx'
import { Header } from 'src/widgets/header/header.tsx'
import { NavIcons } from 'src/widgets/header/navIcons/navIcons.tsx'
import { OpenProfileIconButton } from 'src/widgets/openProfileIconButton/openProfileIconButton.tsx'
import { OpenCardsIconButton } from 'src/widgets/openCardsIconButton/openCardsIconButton.tsx'
import { OpenSettingsIconButton } from 'src/widgets/openSettingsIconButton/openSettingsIconButton.tsx'
import { BreadcrumbLogo } from 'src/widgets/header/breadcrumbLogo/breadcrumbLogo.tsx'
import { selectLang } from 'src/entities/setting/model/settingSlice.ts'
import { KEYS, PATHS, SYMBOLS, TEXTS, TYPES, VALUES } from 'src/shared/const'
import { Field } from 'src/shared/ui/field/field.tsx'
import { Button } from 'src/shared/ui/button/button.tsx'
import { useAppDispatch, useAppSelector } from 'src/app/store/store.ts'
import { SubmitHandler, useForm } from 'react-hook-form'
import { selectIsAuthorized, selectUser } from 'src/features/authorize/model/authorizeSlice.ts'
import { Form } from 'src/shared/ui/form/form.tsx'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { createCard, selectCardsError, selectIsCardsLoading } from 'src/entities/card'
import { ErrorMessage } from 'src/shared/ui/errorMessage/errorMessage.tsx'
import { useNavigate } from 'react-router-dom'

// ToDo: Refactor component.
export const CreateCardPage = () => {
    const lang = useAppSelector(selectLang)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const isCardsLoading = useAppSelector(selectIsCardsLoading)
    const isAuthorized = useAppSelector(selectIsAuthorized)
    const isAuthorizedOrLoading = isAuthorized || isCardsLoading
    const user = useAppSelector(selectUser)
    const cardsError = useAppSelector(selectCardsError)

    const stringValidation = z.string().min(1, {
        message: TEXTS[lang].REQUIRED_FIELD,
    })

    const draftCardSchema = z.object({
        [KEYS.TITLE]: stringValidation,
        [KEYS.CONTENT]: stringValidation,
        [KEYS.TAGS]: z.string(),
        [KEYS.NAME]: stringValidation,
        [KEYS.EMAIL]: stringValidation.email({ message: TEXTS[lang].INVALID_MAIL }),
    })

    type DraftCardSchema = z.infer<typeof draftCardSchema>

    const defaultValues = {
        title: VALUES.EMPTY_STRING,
        content: VALUES.EMPTY_STRING,
        tags: VALUES.EMPTY_STRING,
        name: user?.name ?? VALUES.EMPTY_STRING,
        email: user?.email ?? VALUES.EMPTY_STRING,
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<DraftCardSchema>({
        defaultValues,
        resolver: zodResolver(draftCardSchema),
    })

    const submit: SubmitHandler<DraftCardSchema> = draftCard =>
        dispatch(createCard(draftCard))
            .unwrap()
            .then(customCard => navigate(`${PATHS.CARD}${customCard.id}`))

    const onReset = () => reset(defaultValues)

    return (
        <>
            <Header>
                <BreadcrumbLogo path={TEXTS[lang].CREATE_NEW_CARD} lang={lang} />
                <NavIcons>
                    <OpenProfileIconButton />
                    <OpenSettingsIconButton />
                    <OpenCardsIconButton />
                </NavIcons>
            </Header>
            <Page>
                <S.CreateCard>
                    <Form onSubmit={handleSubmit(submit)}>
                        <Field
                            {...register(KEYS.TITLE)}
                            placeholder={`${TEXTS[lang].TITLE}${SYMBOLS.ASTERISK}`}
                            error={errors.title?.message}
                            disabled={isCardsLoading}
                        />
                        <Field
                            {...register(KEYS.CONTENT)}
                            placeholder={`${TEXTS[lang].CONTENT}${SYMBOLS.ASTERISK}`}
                            error={errors.content?.message}
                            disabled={isCardsLoading}
                            as={TYPES.TEXTAREA}
                        />
                        <Field
                            {...register(KEYS.TAGS)}
                            placeholder={TEXTS[lang].TAGS}
                            error={errors.tags?.message}
                            disabled={isCardsLoading}
                        />
                        <Field
                            {...register(KEYS.NAME)}
                            placeholder={`${TEXTS[lang].NAME}${SYMBOLS.ASTERISK}`}
                            error={errors.name?.message}
                            disabled={isAuthorizedOrLoading}
                        />
                        <Field
                            {...register(KEYS.EMAIL)}
                            placeholder={`${TEXTS[lang].MAIL}${SYMBOLS.ASTERISK}`}
                            error={errors.email?.message}
                            disabled={isAuthorizedOrLoading}
                            type={TYPES.EMAIL}
                        />
                        <Button
                            name={TEXTS[lang].CREATE}
                            align={VALUES.STRETCH}
                            isLoading={isCardsLoading}
                            isSecondary
                        />
                    </Form>
                    {!isCardsLoading && (
                        <Button
                            name={TEXTS[lang].CLEAR}
                            onClick={onReset}
                            align={VALUES.STRETCH}
                            isSecondary
                            isWarning
                        />
                    )}
                    {cardsError && <ErrorMessage error={cardsError} />}
                </S.CreateCard>
            </Page>
        </>
    )
}
