type Options = {
    level: 'new' | 'old' | '1' | '2' | 1 | 2
    style: 'text' | 'math'
    retry: Number
    fetchImage: Boolean
}
type Captcha = {
    url:String,
    solution:String
    image?:Buffer
}
function captcha(options:Options):Promise<Captcha>
export = captcha
