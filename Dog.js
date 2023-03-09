
// dog class, construct object baset od "data" 


class Dog {
    constructor(data){
        Object.assign(this,data)
        this.status = ''
    }

      // reaction method  - sets this.status to html of label "like or nope" , loaded image depends on hasbeenlike variable
    reaction(){
        const decision =  this.hasBeenLiked == true ? "like" : "nope";
        this.status = `<img
        class="w-[233px] h-[116px] -rotate-45 -translate-y-[606px]"
        src="/images/badge-${decision}.png"
        alt="like"
      />`
    }

    // gethtml method - generates html for dog section based on data from object 
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