
class Dog {
    constructor(data){
        Object.assign(this,data)
        this.status = ''
    }

    reactionLike(){
        this.status = `<img
        class="w-[233px] h-[116px] -rotate-45 -translate-y-[606px]"
        src="/images/badge-like.png"
        alt="like"
      />`
    }

    reactionNope(){
        this.status = `<img
        class="w-[233px] h-[116px] -rotate-45 -translate-y-[606px]"
        src="/images/badge-nope.png"
        alt="like"
      />`
    }
    
    getHtml(){
        return `<div
        style="background-image: url(${this.avatar})"
        class="h-[700px] w-[534px] bg-slate-200 mx-auto rounded-2xl bg-cover"
      >
        <div class="ml-[20px] pt-[600px] text-white">
          <h1 class="font-bold text-2xl">${this.name}, ${this.age}</h1>
          <p class="mt-1">${this.bio}</p>
        </div>
        ${this.status}
      </div>
      `
    }
}

export {Dog}