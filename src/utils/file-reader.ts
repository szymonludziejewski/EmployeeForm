export async function readFile(event: Event): Promise<string | ArrayBuffer | null | undefined>{
    return new Promise((resolve) => {
        const FR = new FileReader();
        const input: HTMLInputElement = event.target as HTMLInputElement;
        const fileList: FileList = input.files as FileList;
        FR.addEventListener("load", (evt) => {
    
            resolve(evt.target?.result);
        })
        FR.readAsDataURL(fileList[0]);
    })
}