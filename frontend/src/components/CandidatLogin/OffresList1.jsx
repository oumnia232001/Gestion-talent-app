import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import OffreApi from "../../services/Api/OffreApi.js";
import { toast } from "sonner";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet.jsx";
import ProfileUpsertForm1 from "./ProfileUpsertForm1.jsx";

// Nouveau composant pour afficher chaque offre
function OffreItem({ offre }) {
  const { id, experience_years, knowledge, contrat, experience_required, formation, languages, missions, number_to_recruit, salary, Status, recruiter_id, updated_at, created_at } = offre;
  const [openApplyDialog, setOpenApplyDialog] = useState(false);

  return (
    <div className="offer-item">
      {/* Affichage des détails de l'offre */}
      <div className="offer-details">
        <div>Experience Years: {experience_years}</div>
        <div>Knowledge: {knowledge}</div>
        <div>Contrat: {contrat}</div>
        <div>Experience Required: {experience_required}</div>
        <div>Formation: {formation}</div>
        <div>Languages: {languages}</div>
        <div>Missions: {missions}</div>
        <div>Number to Recruit: {number_to_recruit}</div>
        <div>Salary: {salary}</div>
        <div>Status: {Status}</div>
        <div>Recruiter ID: {recruiter_id}</div>
        <div>Updated At: {updated_at}</div>
        <div>Created At: {created_at}</div>
      </div>
      {/* Bouton "Apply" */}
      <div className="apply-button">
        <Button size="sm" onClick={() => setOpenApplyDialog(true)}>Apply</Button>
       
      </div>
      {/* Formulaire pour soumettre la candidature */}
      <Sheet open={openApplyDialog} onOpenChange={setOpenApplyDialog}>
        <SheetContent>
        <div style={{ maxHeight: '90vh', overflowY: 'auto' }}>
          <div>
            <SheetHeader>
              <SheetTitle>Apply for offer {id}</SheetTitle>
              <SheetDescription>
                Fill out your application details here. Click apply when you're done.
              </SheetDescription>
            </SheetHeader>
            <ProfileUpsertForm1
              values={offre}
              handleSubmit={(values) => {
                const promise = OffreApi.apply(id, values);
                promise.then((response) => {
                  toast.success('Applied successfully!');
                  setOpenApplyDialog(false);
                }).catch((error) => {
                  toast.error('Failed to apply to the offer.');
                });
                
                return promise;
              }}
            />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default function OffresList1() {
  const [data, setData] = useState([]);

  useEffect(() => {
    OffreApi.all().then(({ data }) => {
      const sortedData = data.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      setData(sortedData);
    });
  }, []);

  return (
    <div className="offer-list">
      {data.map((offre, index) => (
        <OffreItem key={index} offre={offre} />
      ))}
    </div>
  );
}
