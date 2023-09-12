
const initialState = [
    {
        id:1,
        name:"Nilesh Borate",
        email:"nilesh@gmail.com",
        number:98907625789
    },
    {
        id:2,
        name:"Rahul Singh",
        email:"rahul@gmail.com",
        number:9999000000
    },
    {
        id:3,
        name:"Shreedhar Patil",
        email:"shreedhar@gmail.com",
        number:8888000000
    },
]

const contactReducer = (state = initialState,action ) => {
    switch(action.type){
        case 'ADD_CONTACT' : 
            state = [...state,action.data]
            return state
        default : return state
    }
}

export default contactReducer;