export class UserDetails {
    constructor(
        public id: any,
        public name: string,
        public profilePic: string,
        public postPic: string,
        public videoUrl: string,
        public text:string,
        public extendedText: string,
        public imageCaption:string,
        public videoCaption:string,
        public likedByMe: boolean,
        public creationTime: any,
        public updatedTime: any,
        public updatedBy: string,
        public time: any,
        public likes: number,
        public maxLength: number
        ){}
}