export class UserDetails {
    constructor(
        public id: any,
        public name: string,
        public picUrl: string,
        public videoUrl: string,
        public text:string,
        public extendedText: string,
        public likedByMe: boolean,
        public creationTime: any,
        public updatedTime: any,
        public updatedBy: string,
        public time: any,
        public likes: number
        ){}
}