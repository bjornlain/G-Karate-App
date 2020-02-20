export class Keypoint {
    linkerhand: boolean;
    rechterhand: boolean;
    linkerbeen: boolean;
    rechterbeen: boolean;
    constructor( linkerhand: boolean, rechterhand: boolean, linkerbeen: boolean, rechterbeen: boolean) {
        this.linkerhand = linkerhand;
        this.rechterhand = rechterhand;
        this.linkerbeen = linkerbeen;
        this.rechterbeen = rechterbeen;
    }

}
