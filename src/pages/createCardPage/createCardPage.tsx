import { S } from './createCardPage.styles.ts'
import { Page } from 'src/shared/ui/page/page.tsx'
import { Header } from 'src/widgets/header/header.tsx'
import { NavIcons } from 'src/widgets/header/navIcons/navIcons.tsx'
import { OpenProfileIconButton } from 'src/widgets/openProfileIconButton/openProfileIconButton.tsx'
import { OpenCardsIconButton } from 'src/widgets/openCardsIconButton/openCardsIconButton.tsx'
import { OpenSettingsIconButton } from 'src/widgets/openSettingsIconButton/openSettingsIconButton.tsx'
import { BreadcrumbLogo } from 'src/widgets/header/breadcrumbLogo/breadcrumbLogo.tsx'
import { selectLang } from 'src/entities/setting/model/settingSlice.ts'
import { KEYS, SYMBOLS, TEXTS, TYPES, VALUES } from 'src/shared/const'
import { Field } from 'src/shared/ui/field/field.tsx'
import { Button } from 'src/shared/ui/button/button.tsx'
import { useAppSelector } from 'src/app/store/store.ts'
import { SubmitHandler, useForm } from 'react-hook-form'
import { selectIsAuthorized, selectUser } from 'src/features/authorize/model/authorizeSlice.ts'
import { Form } from 'src/shared/ui/form/form.tsx'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export const CreateCardPage = () => {
    const lang = useAppSelector(selectLang)
    const isAuthorized = useAppSelector(selectIsAuthorized)
    const user = useAppSelector(selectUser)

    const stringValidation = z.string().min(1, {
        message: TEXTS[lang].REQUIRED_FIELD,
    })

    const createCardSchema = z.object({
        [KEYS.TITLE]: stringValidation,
        [KEYS.TAGS]: z.string(),
        [KEYS.CONTENT]: stringValidation,
        [KEYS.NAME]: stringValidation,
        [KEYS.EMAIL]: stringValidation.email({ message: TEXTS[lang].INVALID_MAIL }),
    })

    type CreateCardSchema = z.infer<typeof createCardSchema>

    const defaultValues = {
        title: VALUES.EMPTY_STRING,
        tags: VALUES.EMPTY_STRING,
        content: VALUES.EMPTY_STRING,
        name: user?.name ?? VALUES.EMPTY_STRING,
        email: user?.email ?? VALUES.EMPTY_STRING,
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<CreateCardSchema>({
        defaultValues,
        resolver: zodResolver(createCardSchema),
    })

    const createCard: SubmitHandler<CreateCardSchema> = data => console.log(data)

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
                    <Form onSubmit={handleSubmit(createCard)}>
                        <Field
                            {...register(KEYS.TITLE)}
                            placeholder={`${TEXTS[lang].TITLE}${SYMBOLS.ASTERISK}`}
                            error={errors.title?.message}
                        />
                        <Field {...register(KEYS.TAGS)} placeholder={TEXTS[lang].TAGS} error={errors.tags?.message} />
                        <Field
                            {...register(KEYS.CONTENT)}
                            placeholder={`${TEXTS[lang].CONTENT}${SYMBOLS.ASTERISK}`}
                            error={errors.content?.message}
                            as={TYPES.TEXTAREA}
                        />
                        <Field
                            {...register(KEYS.NAME)}
                            placeholder={`${TEXTS[lang].NAME}${SYMBOLS.ASTERISK}`}
                            error={errors.name?.message}
                            disabled={isAuthorized}
                        />
                        <Field
                            {...register(KEYS.EMAIL)}
                            placeholder={`${TEXTS[lang].MAIL}${SYMBOLS.ASTERISK}`}
                            error={errors.email?.message}
                            disabled={isAuthorized}
                        />
                        <Button name={TEXTS[lang].CREATE} align={VALUES.STRETCH} isSecondary />
                    </Form>
                    <Button name={TEXTS[lang].CLEAR} onClick={onReset} align={VALUES.STRETCH} isSecondary isWarning />
                </S.CreateCard>
            </Page>
        </>
    )
}
