import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
const AlertError = ({ message }: { message: string }) => {
  return (
    <Alert variant="destructive" className="absolute top-8 w-96">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>خطا !</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};
export default AlertError;
