import * as yup from 'yup';

const schema = yup.object().shape({
    size: yup.string().oneOf(['small', 'medium','large','xlarge'],'Please choose a size'),
    sauce: yup.string().oneOf(['regular','spicy'],'Please choose the type of sauce you like'),
    howMany: yup.number().oneOf([1,2,3,4,5,6,7,8,9,10], 'Please choose a minimum of 1 and a maximum of 10' )
});

export default schema;