const t=window.mycomponent.h;class e{constructor(){this.maxValue=5,this.value=0,this.starList=[]}componentWillLoad(){this.createStarList(this.value)}setValue(t){this.value=t,this.createStarList(this.value),this.onRatingUpdated.emit({value:this.value})}createStarList(e){let a=[];for(let s=1;s<=this.maxValue;s++)a.push(t("span",{class:"rating",onMouseOver:()=>this.createStarList(s),onMouseOut:()=>this.createStarList(this.value),onClick:()=>this.setValue(s)},s<=e?"★":"☆"));this.starList=a}render(){return t("div",null,this.starList)}static get is(){return"my-rating"}static get encapsulation(){return"shadow"}static get properties(){return{maxValue:{type:Number,attr:"max-value"},starList:{state:!0},value:{type:Number,attr:"value",mutable:!0}}}static get events(){return[{name:"onRatingUpdated",method:"onRatingUpdated",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".rating{color:orange}"}}export{e as MyRating};