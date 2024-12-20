import { z } from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl,FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../../ui/form.jsx";
import { Input } from "../../ui/input.jsx";
import { Button } from "../../ui/button.jsx";

import {Import, Loader} from "lucide-react";
import {Textarea} from "../../ui/textarea.jsx";
import {RadioGroup, RadioGroupItem} from "../../ui/radio-group.jsx";


import {toast} from "sonner";
const formSchema = z.object({

  
  name: z.string().max(255),
  email :z.string().max(255),
  password :z.string().max(255),
  phone :z.string().max(10),
  address :z.string().max(255),
  date_of_birth: z.string(),
  gender :z.string(),
  last_position_held:z.string().max(45),
  faculty_name :z.string().max(45),
  profile_image: z.any(),

  });

export default function CandidatUpsertForm({handleSubmit,values}) {
  
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: values || {}

      })

      const {setError , formState: {isSubmitting}, reset} = form
      const isUpdate = values !== undefined

      const onSubmit = async  values => { 

        const loaderMsg = isUpdate? 'Updating in progress.': 'Adding candidat'
        const loader = toast.loading(loaderMsg)
        
       await handleSubmit(values).then(
        ({status,data}) => {
         if(status === 200) {
            toast.success(data.message)
            reset()
          }
         
        }).catch (({response}) => {
          Object.entries(response.data.errors).forEach((error) => {
           const [fieldName, errorMessages] =  error
            
            setError(fieldName, {
              message: errorMessages.join()
            })
         
          })
         
        }).finally(() => {
          toast.dismiss()
        })
      };


return<>

<Form {...form}>
<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

        <FormField
          control={form.control}
          name="name"
          render={({field}) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage/>
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
                <Textarea
                  placeholder="Email"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
<FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
            <FormLabel>Phone</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Phone"
                className="resize-none"
                {...field}
              />
            </FormControl>
            
            <FormMessage />
          </FormItem>
          )}
        />
 <FormField
          control={form.control}
          name="password"
          render={({field}) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type={'password'} placeholder="Password" {...field} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />



<FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="Address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
 <FormField
          control={form.control}
          name="date_of_birth"
          render={({field}) => (
            <FormItem>
              <FormLabel>Date of birth</FormLabel>
              <FormControl>
                <Input type={'date'} placeholder="Date of Birth" {...field} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
   <FormField
          control={form.control}
          name="gender"
          render={({field}) => (
            <FormItem className="space-y-3">
              <FormLabel>Gender</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="m"/>
                    </FormControl>
                    <FormLabel className="font-normal">
                      Male
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="f"/>
                    </FormControl>
                    <FormLabel className="font-normal">
                      Female
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />



<FormField
          control={form.control}
          name="last_position_held"
          render={({ field }) => (
            <FormItem>
              <FormLabel> Last Position Held</FormLabel>
              <FormControl>
                <Input placeholder="Last Position Held" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
  
 <FormField
          control={form.control}
          name="faculty_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel> Faculty Name</FormLabel>
              <FormControl>
                <Input placeholder="Faculty Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
 <FormField
  control={form.control}
  name="profile_image"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Profile Image</FormLabel>
      <FormControl>
        <Input
          type="file"
          accept="image/*"
          onChange={(e) => field.onChange(e.target.files[0])}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>



         <Button className={'mt-2'} type="submit">
       { isSubmitting && <Loader  className={'mx-2 my-2 animate-spin'}/>} {''} 
       {isUpdate? 'Update': 'Create'}
        </Button>
      </form>
    </Form>


</>

}