import { S } from 'src/shared/ui/loading/loading.styles.ts'
import { SYMBOLS, TEXTS } from 'src/shared/const'
import { selectLang } from 'src/entities/setting/model/setting.selectors.ts'
import { LoadingSizes } from 'src/shared/ui/loading/loading.types.ts'
import { LoadingIcon } from 'src/shared/ui/loadingIcon/loadingIcon.tsx'
import { useAppSelector } from 'src/app/store.ts'

type Props = {
    size?: LoadingSizes
}

export const Loading = (props: Props) => {
    const lang = useAppSelector(selectLang)

    return (
        <S.Loading {...props}>
            {TEXTS[lang].LOADING}
            {SYMBOLS.SPACE}
            <LoadingIcon />
        </S.Loading>
    )
}
