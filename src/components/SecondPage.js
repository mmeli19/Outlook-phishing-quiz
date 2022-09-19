import { Container, Navbar, Toast, ToastContainer, Button } from 'react-bootstrap'
import { useState, useEffect, useRef } from 'react';
import { MyVerticallyCenteredModal } from './Modal';
import validator from 'validator';
const SecondPage = ({setEmail, setName, handleNext}) => {
    const [showA, setShowA] = useState(false);
    const toggleShowA = () => setShowA(true);
    const [modalShow, setModalShow] = useState(false);
    const emailRef = useRef()
    const nameRef = useRef()
    
    
    useEffect(() => {
        toggleShowA();
    }, [])
    
    const handleValues = () => {
        const email = emailRef.current.value
        const nameValue = nameRef.current.value
        setEmail(email)
        setName(nameValue)

    }
    const handleValidation = (e) => {
        e.preventDefault()
        const email = emailRef.current.value
        const nameValue = nameRef.current.value
        if (nameValue && validator.isEmail(email) ){
            handleNext()
        }
    }
    
    
  return (
      
    <Container fluid className="Container2 vh-100">
        <Navbar className="py-4 px-md-5 Navbar">
        </Navbar>
        <Container fluid className="h-50 Container d-flex align-items-center">
            <div className="text-center mx-auto form_details">   
                <h1 className='text-white'>Enter full name and school email</h1> 
                <p>Please Enter your full name and school email for the simulation to look more realistic. Don’t worry, this information won’t leave your device. <span className="more" onClick={() => setModalShow(true)}>more</span> </p>
                <p>PHISH: Fake Email
                    <br/>
                    LEGITIMATE: Fake Email
                </p>

           </div>
        </Container>
        <ToastContainer position="middle-center" className="mt-5 Toast">
            <Toast show={showA} onClose={toggleShowA} className="mt-5">
                <Toast.Body>
                        <form action="" onSubmit={handleValidation} className='p-3' onChange={handleValues}>
                            <input ref={nameRef} type="text" className='w-100' id='name' />
                            <label className='d-block mb-5' htmlFor="name">Name</label>
                            <input ref={emailRef} type="email" className='w-100' id='email' />
                            <label htmlFor="email" className='d-block mb-5'>Email</label>
                            <Button className='w-100'  type="submit">
                            GET STARTED
                            </Button>
                        </form>
                        
                </Toast.Body>
            </Toast>
        </ToastContainer>
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        />
    </Container>
  )
}

export default SecondPage