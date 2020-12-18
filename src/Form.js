import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: url('https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
    height: 100vh;
`

const Title = styled.h1`
    color: white;
`

const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const SectionTitle = styled.h3`
    color: white;
`

const Input = styled.input`

`

const Select = styled.select``

const ToppingsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const Order = styled.button``

const Topping = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ToppingTitle = styled.p`
    color: white;
`

const InputArea = styled.input`
`

const Form = (props) => {
    const { formValues, change, submit, checked } = props
    return (
        <Wrapper>
            <Title>Build your Pizza</Title>
            <form onSubmit={submit}>
                <Section>
                    <SectionTitle>Name</SectionTitle>
                    <Input type='text' name='name' value={formValues.name} onChange={change} />
                </Section>
                <Section>
                    <SectionTitle>Size</SectionTitle>
                    <Select value={formValues.size} name='size' onChange={change}>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </Select>
                </Section>
                <Section>
                    <SectionTitle>Toppings</SectionTitle>
                    <ToppingsWrapper>
                        <Topping>
                            <ToppingTitle>Pepperoni</ToppingTitle>
                            <Input type='checkbox' name='pepperoni' value='pepperoni' onChange={checked} />
                        </Topping>
                        <Topping>
                            <ToppingTitle>Sausage</ToppingTitle>
                            <Input type='checkbox' name='sausage' value='sausage' onChange={checked} />
                        </Topping>
                        <Topping>
                            <ToppingTitle>Mushrooms</ToppingTitle>
                            <Input type='checkbox' name='mushrooms' value='mushrooms' onChange={checked} />
                        </Topping>
                        <Topping>
                            <ToppingTitle>Onions</ToppingTitle>
                            <Input type='checkbox' name='onions' value='onions' onChange={checked} />
                        </Topping>
                    </ToppingsWrapper>
                </Section>
                <Section>
                    <SectionTitle>Special Instructions</SectionTitle>
                    <InputArea type='textarea' name='instructions' value={formValues.instructions} onChange={change} />
                </Section>
                <Section>
                    <Order>Order</Order>
                </Section>
            </form>
        </Wrapper>
    )
}

export default Form