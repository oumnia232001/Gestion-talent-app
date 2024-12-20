import { useContext, useEffect } from 'react';
import { useCandidatContext } from "../../context/CandidatContext";
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form.jsx';
import { Input } from '../ui/input.jsx'; // Importer le composant Input plutôt que Textarea
import { Button } from '../ui/button.jsx';
import { Loader } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group.jsx';
import { toast } from 'sonner';
import CandidatsApi from '../../services/Api/CandidatsApi.js';

const formSchema = z.object({
  name: z.string().max(255),
  email: z.string().max(255),
  password: z.string().max(255),
  phone: z.string().max(10),
  address: z.string().max(255),
  date_of_birth: z.string(),
  gender: z.string(),
  last_position_held: z.string().max(45),
  faculty_name: z.string().max(45),
});

export default function ProfileUpsertForm1({ handleSubmit, values }) {
  const { user } = useCandidatContext(); // Récupérer les données de l'utilisateur connecté depuis le contexte d'authentification

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: user ? {
      name: user.name || '',
      email: user.email || '',
      phone: user.phone || '',
      address: user.address || '',
      date_of_birth: user.date_of_birth || '',
      gender: user.gender || '',
      last_position_held: user.last_position_held || '',
      faculty_name: user.faculty_name || '',
    } : {},
  });

  const { setError, formState: { isSubmitting }, reset } = form;
  const isUpdate = values !== undefined;

  useEffect(() => {
    form.reset(user);
  }, [user]);

  const onSubmit = async (values) => {
    const loaderMsg = isUpdate ? 'Updating in progress.' : 'Adding profile candidat';
    const loader = toast.loading(loaderMsg);

    try {
      const { status, data } = await CandidatsApi.updateUser(user?.id, values);
      if (status === 200) {
        toast.success(data.message);
        reset();
      }
    } catch (error) {
      const response = error.response;
      if (response && response.data && response.data.errors) {
        Object.entries(response.data.errors).forEach(([fieldName, errorMessages]) => {
          setError(fieldName, {
            message: errorMessages.join()
          });
        });
      } else {
        toast.error("An unexpected error occurred");
      }
    } finally {
      toast.dismiss(loader);
    }
  };

  return (
    <>
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
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="Phone" {...field} />
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
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
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
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date of Birth</FormLabel>
                <FormControl>
                  <Input type="date" placeholder="Date of Birth" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
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
                        <RadioGroupItem value="m" />
                      </FormControl>
                      <FormLabel className="font-normal">Male</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="f" />
                      </FormControl>
                      <FormLabel className="font-normal">Female</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="last_position_held"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Position Held</FormLabel>
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
                <FormLabel>Faculty Name</FormLabel>
                <FormControl>
                  <Input placeholder="Faculty Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="mt-2" type="submit">
            {isSubmitting && <Loader className="mx-2 my-2 animate-spin" />} {''}
            {isUpdate? ' apply': 'Update'}
          </Button>
        </form>
      </Form>
    </>
  );
}
