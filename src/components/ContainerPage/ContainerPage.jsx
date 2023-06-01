import DestinationForm from "../DestinationsForm/DestinationsForm";
import DestinationPage from "../DestinationPage/DestinationPage";

function ContainerPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:max-w-none lg:py-16">
          <DestinationPage />
          <div className="mt-4 sm:mt-6">
            <DestinationForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContainerPage;
