export default class Homepage {

    constructor(page){
        this.page = page
    }

    printsample(){
        console.log('printing sample class')
        console.log('base url is ' + process.env.base_url)
    }
}