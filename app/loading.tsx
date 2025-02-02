import { Card } from "@/components/ui/card";
const Loader = ({ customMessage = "Please wait..." }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="flex flex-col items-center p-6 shadow-lg rounded-lg bg-white w-[300px]">
        <h2 className="text-xl font-semibold mb-2 text-center">Loading</h2>
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mb-4"></div>
        <p className="mt-2 text-gray-600 text-center">{customMessage}</p>
      </Card>
    </div>
  );
};

export default Loader;
