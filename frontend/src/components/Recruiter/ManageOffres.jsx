import { useCandidatContext } from "../../context/CandidatContext"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs.jsx";
import { Button } from "../ui/button.jsx";

import { Separator } from "../ui/separator.jsx";
import { ScrollArea, ScrollBar } from "../ui/scroll-area.jsx";
import { PlusCircleIcon } from "lucide-react";
import OffresCreateForm from "./Forms/OffreUpsertForm.jsx";
import OffresList from "../data-table/OffresList.jsx";
import OffreUpsertForm from "./Forms/OffreUpsertForm.jsx";
import OffreApi from "../../services/Api/OffreApi.js";


export default function ManageOffres() {
  const { user } = useCandidatContext()
  return <>
    <div className="relative overflow-x-auto">
      <div className="md:hidden">

      </div>
      <div className="hidden md:block">

        <div className="">
          <div className="bg-background">
            <div className="grid">

              <div className="col-span-3 lg:col-span-4">
                <div className="h-full px-4 py-6 lg:px-8">
                  <Tabs defaultValue="offers_list" className="h-full space-y-6">
                    <div className="space-between flex items-center">
                      <TabsList>
                        <TabsTrigger value="offers_list" className="relative">
                          Offers
                        </TabsTrigger>
                        <TabsTrigger value="Add_offer">Add new Offers</TabsTrigger>
                      </TabsList>

                    </div>
                    <TabsContent
                      value="offers_list"
                      className="border-none p-0 outline-none"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            All Offers
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            <OffresList />
                          </p>
                        </div>
                      </div>

                      <div className="relative">
                        <ScrollArea>

                          <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                      </div>
                    </TabsContent>
                    <TabsContent
                      value="Add_offer">

                      <div className="space-y-1">
                        <OffreUpsertForm handleSubmit={(values) => OffreApi.create(values)}/>
                      </div>

                      <Separator className="my-4" />
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </>
}