
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
        case 'EDIT_CONTACT':
            const updateArray = state.map(contact => contact.id == action.data.id ? action.data : contact)
            state = updateArray
            return state 
        case 'DELETE_CONTACT':
            const filterContact = state.filter(contact => contact.id != action.data ? contact : null)
            state = filterContact;
            return state
        default : return state
    }
}

export default contactReducer;