import { useEffect, useState } from "react";
import { DataTable1 } from "./DataTable1.jsx";
import { DataTableColumnHeader } from "./DataTableColumnHeader.jsx";
import { Button } from "@/components/ui/button"
import {AlertDialog,AlertDialogAction,AlertDialogCancel,AlertDialogContent,
AlertDialogDescription,AlertDialogFooter,AlertDialogHeader,AlertDialogTitle,AlertDialogTrigger,} from "../ui/alert-dialog.jsx";
import OffreApi from "../../services/Api/OffreApi.js";
import {toast} from "sonner";
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
import OffreUpsertForm from "../Recruiter/Forms/OffreUpsertForm.jsx";


 
  export default function OffresList() {
    const [data, setData] = useState([])
    
     const OffresColumns  = [
   
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
        accessorKey: "experience_years",
      
        header: ({ column }) => {
          return <DataTableColumnHeader column={column} title="Experince Years" />
    
          const isAsc = column.getIsSorted() === "asc"
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(isAsc)}
            >
              Experince Years
              {isAsc?<ArrowUp className="ml-2 h-4 w-4" />:<ArrowDown className="ml-2 h-4 w-4" />}
            </Button>
          )
        },
      },
      {
        accessorKey: "knowledge",
        header: ({ column }) => {
          return <DataTableColumnHeader column={column} title=" Knowledge" />
    
          const isAsc = column.getIsSorted() === "asc"
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(isAsc)}
            >
              Knowledge
              {isAsc?<ArrowUp className="ml-2 h-4 w-4" />:<ArrowDown className="ml-2 h-4 w-4" />}
            </Button>
          )
        },
      },
      {
        accessorKey: "contrat",
        header: ({ column }) => {
          return <DataTableColumnHeader column={column} title="Contrat" />
    
          const isAsc = column.getIsSorted() === "asc"
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(isAsc)}
            >
              Contrat
              {isAsc?<ArrowUp className="ml-2 h-4 w-4" />:<ArrowDown className="ml-2 h-4 w-4" />}
            </Button>
          )
        },
      },
      {
        accessorKey: "experience_required",
        header: ({ column }) => {
          return <DataTableColumnHeader column={column} title="Experience Required" />
    
          const isAsc = column.getIsSorted() === "asc"
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(isAsc)}
            >
              Experience Required
              {isAsc?<ArrowUp className="ml-2 h-4 w-4" />:<ArrowDown className="ml-2 h-4 w-4" />}
            </Button>
          )
        },
      },
      
      {
        accessorKey: "formation",
        header: ({ column }) => {
          return <DataTableColumnHeader column={column} title="Formation" />
    
          const isAsc = column.getIsSorted() === "asc"
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(isAsc)}
            >
              Formation
              {isAsc?<ArrowUp className="ml-2 h-4 w-4" />:<ArrowDown className="ml-2 h-4 w-4" />}
            </Button>
          )
        },
      },
      {
        accessorKey: "languages",
        header: ({ column }) => {
          return <DataTableColumnHeader column={column} title="Languages" />
    
          const isAsc = column.getIsSorted() === "asc"
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(isAsc)}
            >
              Languages
              {isAsc?<ArrowUp className="ml-2 h-4 w-4" />:<ArrowDown className="ml-2 h-4 w-4" />}
            </Button>
          )
        },
      },
      {
        accessorKey: "missions",
        header: ({ column }) => {
          return <DataTableColumnHeader column={column} title="Missions" />
    
          const isAsc = column.getIsSorted() === "asc"
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(isAsc)}
            >
              Missions
              {isAsc?<ArrowUp className="ml-2 h-4 w-4" />:<ArrowDown className="ml-2 h-4 w-4" />}
            </Button>
          )
        },
      },
      {
        accessorKey: "number_to_recruit",
        header: ({ column }) => {
          return <DataTableColumnHeader column={column} title="Number to Recruit" />
    
          const isAsc = column.getIsSorted() === "asc"
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(isAsc)}
            >
              Number to Recruit
              {isAsc?<ArrowUp className="ml-2 h-4 w-4" />:<ArrowDown className="ml-2 h-4 w-4" />}
            </Button>
          )
        },
      },
      {
        accessorKey: "salary",
        header: ({ column }) => {
          return <DataTableColumnHeader column={column} title="Salary" />
    
          const isAsc = column.getIsSorted() === "asc"
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(isAsc)}
            >
             Salary
              {isAsc?<ArrowUp className="ml-2 h-4 w-4" />:<ArrowDown className="ml-2 h-4 w-4" />}
            </Button>
          )
        },
      },
      {
        accessorKey: "Status",
        header: ({ column }) => {
          return <DataTableColumnHeader column={column} title=" Status" />
    
          const isAsc = column.getIsSorted() === "asc"
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(isAsc)}
            >
             Status
              {isAsc?<ArrowUp className="ml-2 h-4 w-4" />:<ArrowDown className="ml-2 h-4 w-4" />}
            </Button>
          )
        },
    
        
      },
      {
        accessorKey: "recruiter_id",
        header: ({ column }) => {
          return <DataTableColumnHeader column={column} title="Recruiter Id" />
    
          const isAsc = column.getIsSorted() === "asc"
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(isAsc)}
            >
             Recruiter Id
              {isAsc?<ArrowUp className="ml-2 h-4 w-4" />:<ArrowDown className="ml-2 h-4 w-4" />}
            </Button>
          )
        },
      },
      {
        accessorKey: "updated_at",
       
        cell: ({ row }) => {
          const date = (row.getValue("updated_at"))
          const formatted = new  Date(date).toString()
     
          return <div className="text-right font-medium">{formatted}</div>
        },
        header: ({ column }) => {
          return <DataTableColumnHeader column={column} title="Updated at" />
          const isAsc = column.getIsSorted() === "asc"
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(isAsc)}
            >
             Updated at
              {isAsc?<ArrowUp className="ml-2 h-4 w-4" />:<ArrowDown className="ml-2 h-4 w-4" />}
            </Button>
          )
        },
      },
      {
        accessorKey: "created_at",
        header: ({ column }) => {
          return <DataTableColumnHeader column={column} title="Created At" />
          const isAsc = column.getIsSorted() === "asc"
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(isAsc)}
            >
            Created At
              {isAsc?<ArrowUp className="ml-2 h-4 w-4" />:<ArrowDown className="ml-2 h-4 w-4" />}
            </Button>
          )
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
              <SheetTitle>Update offer {id}</SheetTitle>
              <SheetDescription>
                Make changes to your offer here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <OffreUpsertForm values={row.original} 
  handleSubmit={(values) => { 
    const promise = OffreApi.update(id, values);
    promise.then((response) => {
      const offre = response.data.offre;
      const updatedData = data.map((item) => {
        return item.id === id ? offre : item;
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
              <AlertDialogTitle>Are you absolutely sure to delete offer Number {id} ?</AlertDialogTitle>
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
    const { status } = await OffreApi.delete(id);
    toast.dismiss(deletingLoader);
    if (status === 200) {
      setData(data.filter((offre) => offre.id !== id));
      toast.success('Offer deleted', {
        description: `Offer with ID ${id} has been successfully deleted.`,
        icon: <Trash2Icon />,
      });
    } else {
      toast.error('Failed to delete offer.');
    }
  } catch (error) {
    toast.dismiss(deletingLoader);
    console.error('Error deleting offer:', error);
    toast.error('An error occurred while deleting offer.');
  }
}}>Delete</AlertDialogAction>

            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
             </div> 
            )
          },
      },
    
     
    ]
useEffect( () => {

OffreApi.all().then(({data}) => setData(data.data))
}, []);
return <>

<DataTable1  columns={OffresColumns} data={data}/>
<div/>

<div/>
</>

  }