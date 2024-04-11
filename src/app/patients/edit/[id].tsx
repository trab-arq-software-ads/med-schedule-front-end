import { useRouter } from "next/router";
import { PatientForm } from "../components/create-patients";

const EditPatientPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <PatientForm />;
};

export default EditPatientPage;
