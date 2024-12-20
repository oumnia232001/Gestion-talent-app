import { z } from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl,FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form.jsx";

import { Input } from "../ui/input.jsx";
import { Button } from "../ui/button.jsx";
import { axiosClient } from "../../api/axios.js";
import { useNavigate } from "react-router-dom";
import {CANDIDAT_DASHBOARD_ROUTE} from "../../router/index.jsx";
import {Loader} from "lucide-react";
const formSchema = z.object({
    name:  z.string().min(2).max(30),
    email: z.string().email().min(2).max(30),
    password: z.string().min(8).max(30),
    password_confirmation: z.string().min(8).max(30),
  });



export default function Register() {
  const navigate = useNavigate()
    const form = useForm({
        resolver: zodResolver(formSchema),
       
        defaultValues:{
      name:"",
      email:"",
      password: "",
      password_confirmation: "",

          }

      })

      const {setError , formState: {isSubmitting}} = form

     
      // 2. Define a submit handler.
      const onSubmit = async  values => {
       await axiosClient.get('/sanctum/csrf-cookie',{
           baseURL: import.meta.env.VITE_BACKEND_URL
       })
       const data =  axiosClient.post('/register', values).then(
        (value) => {
          if(value.status === 204) {
            window.localStorage.setItem('ACCESS_TOKEN', 'test')
            navigate (CANDIDAT_DASHBOARD_ROUTE)
          }

        } 
       ).catch(({response}) =>{
         
            setError('email', {
          message: response.data.error.email.join()

            })
         
       } )
   
       
      };


return<>
 <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        
      <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        
        
        
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
              <Input type={'password'} placeholder="Password" {...field} />
              </FormControl>
            
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="password_confirmation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password Confirmation</FormLabel>
              <FormControl>
              <Input type={'password'} placeholder="Password_Confirmation" {...field} />
              </FormControl>
            
              <FormMessage />
            </FormItem>
          )}
        />



         <Button disabled={isSubmitting} type="submit">
       { isSubmitting && <Loader  className={'mx-2 my-2 animate-spin'}/>} {''} Register
        </Button>
      </form>
    </Form>


</>

}