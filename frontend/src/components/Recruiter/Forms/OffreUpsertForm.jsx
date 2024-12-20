import { z } from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl,FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../../ui/form.jsx";
import { Input } from "../../ui/input.jsx";
import { Button } from "../../ui/button.jsx";



import {Import, Loader} from "lucide-react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "../../ui/select.jsx";
import {Textarea} from "../../ui/textarea.jsx";
import {RadioGroup, RadioGroupItem} from "../../ui/radio-group.jsx";


import {toast} from "sonner";
const formSchema = z.object({

  
  experience_years: z.number().int(),
  knowledge :z.string().max(500),
  contrat :z.string().max(50),
  experience_required :z.string().max(250),
  formation :z.string().max(45),
  languages :z.string().max(150),
  missions :z.string().max(350),
  number_to_recruit: z.number().int(),
  salary: z.number().int(),
  Status :z.string().max(100),
  recruiter_id: z.number().int(),

  });

export default function OffreUpsertForm({handleSubmit,values}) {
  
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: values || {}

      })

      const {setError , formState: {isSubmitting}, reset} = form
      const isUpdate = values !== undefined
      const onSubmit = async  values => { 

        const loaderMsg = isUpdate? 'Updating in progress.': 'Adding offer'
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
          /**/
        }).finally(() => {
          toast.dismiss()
        })
      };


return<>
 <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormField
   control={form.control}
   name="experience_years"
   render={({ field }) => (
     <FormItem>
       <FormLabel>Experience years</FormLabel>
       <FormControl>
         <Input
           placeholder="Experience years"
           {...field}
           onChange={(e) => {
             const value = parseInt(e.target.value);
             if (!isNaN(value)) {
               field.onChange(value);
             }
           }}
         />
       </FormControl>
       <FormMessage />
     </FormItem>
   )}
/>
  
<FormField
          control={form.control}
          name="knowledge"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Knowledge</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Knowledge"
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
          name="contrat"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contract</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select contract" />
                  </SelectTrigger>
                  </FormControl>
                <SelectContent>
                  {['CDI', 'CDD', 'Internship Observation', 'Pre-employment Training', 'End of Study Internship Presentation'].map((contrat, key ) => 
                   <SelectItem key= {key} value={contrat}>{contrat}</SelectItem>)}
               
                </SelectContent>
                
               
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
<FormField
          control={form.control}
          name="experience_required"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Experience Required</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Experience Required"
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
          name="formation"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Level of education</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Bac+2" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Bac+2
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Bac+3" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Bac+3
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Master degree" />
                    </FormControl>
                    <FormLabel className="font-normal">Master degree</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="languages"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Languages</FormLabel>
              <FormControl>
                <Input placeholder="Languages" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
<FormField
          control={form.control}
          name="missions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Missions</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Missions"
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
  name="number_to_recruit"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Number to recruit</FormLabel>
      <FormControl>
        <Input
          placeholder="Number to recruit"
          {...field}
          onChange={(e) => field.onChange(parseInt(e.target.value))}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

<FormField
  control={form.control}
  name="salary"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Salary</FormLabel>
      <FormControl>
        <Input
          placeholder="Salary"
          {...field}
          onChange={(e) => field.onChange(parseInt(e.target.value))}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

<FormField
          control={form.control}
          name="Status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <FormControl>
                <Input placeholder="Status" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
 <FormField
  control={form.control}
  name="recruiter_id"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Recruiter ID</FormLabel>
      <FormControl>
        <Input
          placeholder="Recruiter ID"
          {...field}
          onChange={(e) => field.onChange(parseInt(e.target.value))}
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