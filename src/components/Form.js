import React from 'react';
export default function Form(props) {
    const {
        values,
        onSubmit,
        onInputChange,
        onCheckboxChange,
        disabled,
        errors,
    } = props
    return (
        <div>
            <h2 style={{textAlign:"center"}}>Build Your Own Pizza</h2>
            <h3 style={{textAlign:"center"}}><a href="/">Go Back Home</a></h3>
            <form onSubmit={onSubmit}>
                <fieldset className='uk-fieldset'>
                    <legend className='uk-legend uk-margin-bottom'>Build Your Own Pizza</legend>
                    <div className='uk-text-bold uk-text-center uk-margin-small-bottom'>Name</div>
                    <div className='uk-flex-center uk-grid'>
                        <div className='uk-width-1-4@s'>
                            <label>
                                <input
                                    className='uk-input'
                                    type='text'
                                    name='name'
                                    onChange={onInputChange}
                                    checked={values.name}
                                />
                            </label>
                        </div>
                    </div>

                    <div className='uk-flex-center uk-grid'>
                        <div className='uk-width-1-4@s'>
                            <select
                                className='uk-select'
                                onChange={onInputChange}
                                value={values.size}
                                name='size'
                            >
                                <option value=''>-Select A Size-</option>
                                <option value='small'>Small</option>
                                <option value='medium'>Medium</option>
                                <option value='large'>Large</option>
                            </select>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='uk-text-bold uk-text-center uk-margin-small-bottom'>Sauces</div>
                    <div className='uk-card uk-card-default uk-card-body uk-padding-small'>
                        <div className='uk-child-width-1-3@s uk-text-center uk-grid '>
                            <div>
                                <div className='uk-card uk-card-body uk-padding-small'>
                                    <label>
                                        <input
                                            className='uk-checkbox'
                                            type='checkbox'
                                            name='pesto'
                                            onChange={onCheckboxChange}
                                            checked={values.sauce.pesto}
                                        />
                                        Pesto
                                    </label>
                                </div>
                            </div>
                            <div>
                                <div className='uk-card uk-card-body uk-padding-small'>
                                    <label>
                                        <input
                                            className='uk-checkbox'
                                            type='checkbox'
                                            name='red'
                                            onChange={onCheckboxChange}
                                            checked={values.sauce.red}
                                        />
                                        Red Sauce
                                    </label>
                                </div>
                            </div>
                            <div>
                                <div className='uk-card uk-card-body uk-padding-small'>
                                    <label>
                                        <input
                                            className='uk-checkbox'
                                            type='checkbox'
                                            name='white'
                                            onChange={onCheckboxChange}
                                            checked={values.sauce.white}
                                        />
                                        White Sauce
                                    </label>
                                </div>
                            </div>
                            <div>
                                <div className='uk-card uk-card-body uk-padding-small'>
                                    <label>
                                        <input
                                            className='uk-checkbox'
                                            type='checkbox'
                                            name='garlic'
                                            onChange={onCheckboxChange}
                                            checked={values.sauce.garlic}
                                        />
                                        Garlic Rub
                                    </label>
                                </div>
                            </div>
                            <div>
                                <div className='uk-card uk-card-body uk-padding-small'>
                                    <label>
                                        <input
                                            className='uk-checkbox'
                                            type='checkbox'
                                            name='spicy'
                                            onChange={onCheckboxChange}
                                            checked={values.sauce.spicy}
                                        />
                                        Spicy Chilli Sauce
                                    </label>
                                </div>
                            </div>
                            <div>
                                <div className='uk-card uk-card-body uk-padding-small'>
                                    <label>
                                        <input
                                            className='uk-checkbox'
                                            type='checkbox'
                                            name='bbq'
                                            onChange={onCheckboxChange}
                                            checked={values.sauce.bbq}
                                        />
                                        BBQ Sauce
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='uk-text-bold uk-text-center uk-margin-small-bottom'>Cheese</div>
                    <div className='uk-card uk-card-default uk-card-body uk-padding-small'>
                        <div className='uk-child-width-1-3@s uk-text-center uk-grid '>
                            <div>
                                <div className='uk-card uk-card-body uk-padding-small'>
                                    <label>
                                        <input
                                            className='uk-checkbox'
                                            type='checkbox'
                                            name='asiago'
                                            onChange={onCheckboxChange}
                                            checked={values.cheese.asiago}
                                        />
                                        Asiago
                                    </label>
                                </div>
                            </div>
                            <div>
                                <div className='uk-card uk-card-body uk-padding-small'>
                                    <label>
                                        <input
                                            className='uk-checkbox'
                                            type='checkbox'
                                            name='feta'
                                            onChange={onCheckboxChange}
                                            checked={values.cheese.feta}
                                        />
                                        Feta
                                    </label>
                                </div>
                            </div>
                            <div>
                                <div className='uk-card uk-card-body uk-padding-small'>
                                    <label>
                                        <input
                                            className='uk-checkbox'
                                            type='checkbox'
                                            name='gorgonzola'
                                            onChange={onCheckboxChange}
                                            checked={values.cheese.gorgonzola}
                                        />
                                        Gorgonzola
                                    </label>
                                </div>
                            </div>
                            <div>
                                <div className='uk-card uk-card-body uk-padding-small'>
                                    <label>
                                        <input
                                            className='uk-checkbox'
                                            type='checkbox'
                                            name='mozzarella'
                                            onChange={onCheckboxChange}
                                            checked={values.cheese.mozzarella}
                                        />
                                        Mozzarella
                                    </label>
                                </div>
                            </div>
                            <div>
                                <div className='uk-card uk-card-body uk-padding-small'>
                                    <label>
                                        <input
                                            className='uk-checkbox'
                                            type='checkbox'
                                            name='parmesan'
                                            onChange={onCheckboxChange}
                                            checked={values.cheese.parmesan}
                                        />
                                        Parmesan
                                    </label>
                                </div>
                            </div>
                            <div>
                                <div className='uk-card uk-card-body uk-padding-small'>
                                    <label>
                                        <input
                                            className='uk-checkbox'
                                            type='checkbox'
                                            name='ricotta'
                                            onChange={onCheckboxChange}
                                            checked={values.cheese.ricotta}
                                        />
                                            Ricotta
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='uk-text-bold uk-text-center uk-margin-small-bottom'>Special Instructions</div>
                    <div className='uk-card uk-card-default uk-card-body uk-padding-small'>
                        <div>
                            <div className='uk-card uk-card-body uk-padding-small'>
                                <textarea
                                    className='uk-textarea'
                                    rows='3'
                                    placeholder='...'
                                    name='instructions'
                                    onChange={onInputChange}
                                    value={values.instructions}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className='uk-margin-top uk-text-center'>
                        <button disabled={disabled} className='uk-button uk-button-primary'>Add to Order</button>
                    </div>
                    <div className='errors'>
                        <div>{errors.name}</div>
                        <div>{errors.size}</div>
                        <div>{errors.sauce}</div>
                        <div>{errors.cheese}</div>
                    </div>

                </fieldset>
            </form>


        </div>
    )
}

// Created by Donald Faulknor
// GitHub - https://github.com/social-collab