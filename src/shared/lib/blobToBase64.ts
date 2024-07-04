export const blobToBase64 = (blob: Blob) =>
    new Promise<string>((resolve, reject) => {
        const fileReader = new FileReader()

        fileReader.onloadend = () => resolve(fileReader.result as string)

        fileReader.onerror = () => reject

        fileReader.readAsDataURL(blob)
    })
