import { S } from 'src/pages/errorPage/ui/errorPage.styles.ts'
import { useErrorPage } from 'src/pages/errorPage/lib/useErrorPage.ts'

export const ErrorPage = () => {
    const { onRestart, messages } = useErrorPage()

    return (
        <S.ErrorPage onClick={onRestart}>
            {messages.map((message, index) => (
                <S.Message key={index} index={index}>
                    {message}
                </S.Message>
            ))}
        </S.ErrorPage>
    )
}
