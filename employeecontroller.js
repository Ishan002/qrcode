const { response } = require('express')
const employee = require('../models/employee')

 const index = (req,res,next) => {
    employee.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message : 'an error occured'
        })
    })
 }

 const show = (req,res,next) =>{
    let employeeID = req.body.employeeID
    employee.findById(employeeID)
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res.jon({
            message: 'an error occured'
        })
    })
 }

//add new employee
 const store = async(req,res,next) =>{
    
    const employee1 = new employee({
        text :req.body.text,
    })
    await employee1.save()
    .then(response =>{
        res.json({
            message : 'employee added sucessfully'
        })
    })
    .catch(error =>{
        res.json({
            message :'an error occured'
        })
    })
 }


 //update an employee
const update = (req,res,next) => {
    let employeeID = req.body.employeeID

    let updateData ={
        text:req.body.text,
    }

    employee.findByIdAndUpdate(employeeID, {$set:updateData})
    .then(() =>{
        res.json({
            message :'employee updated sucessfully'
        })
    })

    .catch(error =>{
        res.json({
            message:'an error occured'
        })
    })
}

//delete an employee
const destroy = (req,res,next) =>{
    let employeeID = req.body.employeeID
    employee.findByIdAndRemove(employeeID)
    .then(() =>{
        req.json({
            message:'employee deleted sucessfully'
        })
})
.catch(error =>{
    res.json({
        message:'an error occured'
    })
})
}


module.exports ={
    index,show,store,update,destroy
}