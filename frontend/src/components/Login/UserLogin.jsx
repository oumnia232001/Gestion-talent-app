import { z } from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl,FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form.jsx";
import { Input } from "../ui/input.jsx";
import { Button } from "../ui/button.jsx";
import { useNavigate } from "react-router-dom";
import {CANDIDAT_DASHBOARD_ROUTE, RECRUITER_DASHBOARD_ROUTE} from "../../router/index.jsx";
import { ADMIN_DASHBOARD_ROUTE } from "../../router/index.jsx";
import {Loader} from "lucide-react";
import { useCandidatContext } from "../../context/CandidatContext.jsx";
const formSchema = z.object({
    email: z.string().email().min(2).max(30),
    password: z.string().min(8).max(30),
  });



export default function UserLogin() {
  const {login,setAuthenticated} = useCandidatContext()
  const navigate = useNavigate()
    const form = useForm({
        resolver: zodResolver(formSchema),

      })

      const {setError , formState: {isSubmitting}} = form

     
      // 2. Define a submit handler.
      const onSubmit = async  values => {
       await login(values.email, values.password).then(
        ({status,data}) => {
          if(status === 200) {
            setAuthenticated(true)
            const {role} = data.user
            switch (role) {
              case 'candidat':
                navigate (CANDIDAT_DASHBOARD_ROUTE);
                  break;
              case 'admin':
                navigate (ADMIN_DASHBOARD_ROUTE);  
                break;
             case 'recruiter':
                  navigate (RECRUITER_DASHBOARD_ROUTE);  
                
            }
            console.log(data)
           //navigate (CANDIDAT_DASHBOARD_ROUTE)
          }
    
        }).catch (({response}) => {
          setError('email', {
            message: response.data.errors.email.join()
          })
        })
      };


return<>
 <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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


         <Button disabled={isSubmitting} type="submit">
       { isSubmitting && <Loader  className={'mx-2 my-2 animate-spin'}/>} {''} Login
        </Button>
      </form>
    </Form>


</>

}