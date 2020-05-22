const initialState = {
    data:[]
}

const Item = (state = initialState, action) => {
    let {type,payload} = action
    // let data
    switch (type) {
        case 'ITEM_GET':
            return{...state, data: payload}
        
        // case 'ITEM_DELETE':
        //     data = state.data.map(item => {
        //         if (item === payload)
        //             return payload
        //         return item
        //     })
        //     return {...state, data: data}

        // case 'ITEM_ADD':
        //     return {...state, data: [...state.data, payload]}

        default:
            return state
    }
}
export default Item