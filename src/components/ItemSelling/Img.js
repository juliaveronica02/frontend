import React from 'react'
import axios from 'axios'

class ReactUploadImage extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            imageUrl: null,
            value: {
                name: "",
                price: "",
                description: "",
                quantity: "",
                categoryId: "",
            }
            
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }
    onFormSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('imageUrl',this.state.imageUrl)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post("https://api.juliaveronica.com/item/create",formData, this.state.value, {
            headers: {
              "x-access-token": localStorage.getItem("jwtToken")
              // "Content-Type": "multipart/form-data",
            },})
            .then((response) => {
                alert("The file is successfully uploaded");
            }).catch((error) => {
        });
    }
    onChange(e) {
        this.setState({
            imageUrl:e.target.files[0]
        });
    }
    // handleChange = event => {
    //     const {name, value} = event.target
    //     this.setState({
    //       [name]: value
    //     })    
    //   }
    handleChange(event) {
        this.setState({
            name: event.target.value.name,
            price: event.target.price,
            description: event.target.description,
            quantity: event.target.quantity,
            categoryId: event.target.categoryId
        });
      }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="pt-5 mt-5">
                <h1>File Upload</h1>
                <label>nama</label>
                <input type="text" name="name" value={this.state.value.name}/>
                <input type="file" name="imageUrl" onChange= {this.onChange} />
                <button type="submit">Upload</button>
            </form>
        )
    }
}

export default ReactUploadImage