const user ={
    product: "black_pen",
    price: 199,

    welcomeMesasge: function(){
        console.log(`${this.product} is of ${this.price} Rupees.`)
    }
}

function that(){
    let changew =1
    console.log(this.changew)
}

// that()
// user.welcomeMesasge()

const maggi =() => {
    let time = 2

    console.log(this)
}
maggi()