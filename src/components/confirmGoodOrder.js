import * as yup from 'yup'

const confirmGoodOrder =
    yup.object().shape({
        name_of_pizza: yup.string()
            .required(2, "Name your pizza for extra deliciousness. Mine's name is Steve."),
        pizza_size: yup.string()
            .required("How big is it gonna be?"),
        pizza_sauce: yup.string()
            .required("No sauce is bad sauce"),
        pepperoni: yup.boolean(),
        sausage: yup.boolean(),
        canadian_bacon: yup.boolean(),
        spicy_italian_sausage: yup.boolean(),
        grilled_chicken: yup.boolean(),
        onions: yup.boolean(),
        green_pepper: yup.boolean(),
        diced_tomatoes: yup.boolean(),
        black_olives: yup.boolean(),
        roasted_garlic: yup.boolean(),
        artichoke_hearts: yup.boolean(),
        three_cheese: yup.boolean(),
        pineapple: yup.boolean(),
        extra_cheese: yup.boolean(),
        gluten_free_crust: yup.boolean(),
        special_instruction: yup.string(),
        number_of_pizzas: yup.number()
            .min(1, "You gotta get at least one pizza. Otherwise what's the point?")
            .max(50, "Call Pizza Planet to order more than 50 pizzas. And you better be giving us a couple days' notice.")
    })

    export default confirmGoodOrder