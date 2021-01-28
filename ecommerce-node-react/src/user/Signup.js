import React from 'react'
import Layout from './../core/Layout'

const Signup = () => {

    const form = () => (
        <div>
            <div className="form-group">
                <label htmlFor="name" className="text-muted">name</label>
                <input type="text" className="form-control" id="name"/>
            </div>
            <div className="form-group">
                <label htmlFor="email" className="text-muted">email</label>
                <input type="email" className="form-control" id="email"/>
            </div>
            <div className="form-group"><label htmlFor="password" className="text-muted">password</label>
            <input type="password" className="form-control" id="password"/>
            </div>

            <button className="btn btn-lg btn-block btn-outline-sucess">Signup</button>
       </div>
    )

    return (
        <div>
            <Layout 
                title="Sign up" 
                description="Sign up Node react ecommerce" 
                className="container">

                { form() }

            </Layout>
        </div>
    )
}


export default Signup