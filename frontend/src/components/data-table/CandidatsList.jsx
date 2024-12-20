import { useEffect, useState } from "react";
import { DataTable } from "./DataTable.jsx";
import { DataTableColumnHeader } from "./DataTableColumnHeader.jsx";
import { Button } from "@/components/ui/button"
import {AlertDialog,AlertDialogAction,AlertDialogCancel,AlertDialogContent,
AlertDialogDescription,AlertDialogFooter,AlertDialogHeader,AlertDialogTitle,AlertDialogTrigger,} from "../ui/alert-dialog.jsx";
import CandidatsApi from "../../services/Api/CandidatsApi.js";
import {toast} from "sonner";
import CandidatUpsertForm from "../Recruiter/Forms/CandidatUpsertForm.jsx";
import { Description } from "@radix-ui/react-alert-dialog";
import { Delete, DeleteIcon, Trash2Icon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "../ui/sheet.jsx";

  export default function CandidatsList() {
    const [data, setData] = useState([])
     const CandidatsColumns  = [
      {
        accessorKey: "id",
       
        cell: ({ row }) => {
          const id =row.getValue("id")
     
          return <div className="text-right font-medium">#{id}</div>
        },
        header: ({ column }) => {
          return <DataTableColumnHeader column={column} title="ID" />
         
        },
      },
      {
        accessorKey: "name",
      
        header: ({ column }) => {
          return <DataTableColumnHeader column={column} title="Name" />
    
         
        },
      },
      {
        accessorKey: "email",
        header: ({ column }) => {
          return <DataTableColumnHeader column={column} title=" Email" />
    
         
         
        },
      },
      /*{
        accessorKey: "password",
        header: ({ column }) => {
          return <DataTableColumnHeader column={column} title="Password" />
   
          
        },
      },*/
      {
        accessorKey: "email_verified_at",
        header: ({ column }) => {
          return <DataTableColumnHeader column={column} title="Email Verified At" />
         
        },
      },
      
      {
        accessorKey: "created_at",
        header: ({ column }) => {
          return <DataTableColumnHeader column={column} title="Created At" />
    
          
        },
      },
      {
        accessorKey: "updated_at",
        header: ({ column }) => {
          return <DataTableColumnHeader column={column} title="Updated At" />
    
          
         
        },
      },
      {
        accessorKey: "phone",
        header: "Phone",
        cell: ({ row }) => {
          const phone = row.getValue("phone")
          return <div className="text-right font-medium">+212{phone}</div>
        
        },
      },

      


      {
        accessorKey: "address",
        header: ({ column }) => {
          return <DataTableColumnHeader column={column} title="Address" />
    
        },
      },
      {
        accessorKey: "date_of_birth",
        header: ({ column }) => {
          return <DataTableColumnHeader column={column} title="Date Of Birth" />
    
        
        },
      },
      {
        accessorKey: "gender",
        header: ({column}) => {
          return <DataTableColumnHeader column={column} title="Gender"/>
        },
        cell: ({row}) => {
          const value = row.getValue("gender")
          const gender = value === 'm' ? 'Male' : 'Female'
          return <>{gender}</>
        },
      },
      /*{
        accessorKey: "last_login_date",
        header: ({ column }) => {
          return <DataTableColumnHeader column={column} title=" Last login date" />; 
        },
      },
      
       /* {
        accessorKey: "remember_token	",
        header: ({ column }) => {
          return <DataTableColumnHeader column={column} title=" remember_token" />
    
        
        },
        
      },*/
      {
        accessorKey: "last_position_held",
        header: ({ column }) => {
          return <DataTableColumnHeader column={column} title="Last Position Held" />
    
        
        },
      },
      {
        accessorKey: "faculty_name",
        header: ({ column }) => {
          return <DataTableColumnHeader column={column} title="Faculty Name" />
    
         
        },
      },
      
        {
          id: "actions",
          cell: ({ row }) => {
            const {id} = row.original
            const [openUpdateDialog, setOpenUpdateDialog] = useState(false)
            return (<div className={'flex gap-x-1'}>
              <Sheet open={openUpdateDialog} onOpenChange={setOpenUpdateDialog}>
        <SheetTrigger>
          <Button size ={'sm'}>
            Update
          </Button>
        </SheetTrigger>
        <SheetContent>
        <div style={{ maxHeight: '90vh', overflowY: 'auto' }}>

            <SheetHeader>
              <SheetTitle>Update candidat {id}</SheetTitle>
              <SheetDescription>
                Make changes to your candidat here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <CandidatUpsertForm 
  values={row.original} 
  handleSubmit={(values) => { 
    const promise = CandidatsApi.update(id, values);
    promise.then((response) => {
      const candidat = response.data.candidat;
      const updatedData = data.map((item) => {
        return item.id === id ? candidat : item;
      });
      setData(updatedData);
      setOpenUpdateDialog(false); 
    });
    return promise;
  }} 
/>

          </div>
        </SheetContent>
      </Sheet>
             <AlertDialog>
          <AlertDialogTrigger asChild>
          <Button size ={'sm'} variant={'destructive'}>Delete</Button>
    
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure to delete candidat {id} ?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={async () => {
  const deletingLoader = toast.loading('Deleting in progress.');
  try {
    const { data:deletedcandidat,status } = await CandidatsApi.delete(id);
    toast.dismiss(deletingLoader);
    if (status === 200) {
      setData(data.filter((user) =>user.id !== id));
      toast.success('candidat deleted', {
        description: `candidat with ID ${deletedcandidat.id} has been successfully deleted.`,
        icon: <Trash2Icon />,
      });
    } else {
      toast.error('Failed to delete candidat.');
    }
  } catch (error) {
    toast.dismiss(deletingLoader);
    console.error('Error deleting candidat:', error);
    toast.error('An error occurred while deleting candidat.');
  }
}}>Delete</AlertDialogAction>

            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
             </div> 
            )
          },
      },
    
     
    ];
useEffect( () => {

  CandidatsApi.all().then(({data}) => setData(data.data))
}, []);
return <>

<DataTable  columns={CandidatsColumns} data={data}/>


</>

  }