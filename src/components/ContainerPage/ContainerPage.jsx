import DestinationForm from "../DestinationsForm/DestinationsForm";
import DestinationPage from "../DestinationPage/DestinationPage";
import SearchContainer from "../SearchContainer/SearchContainer";

function ContainerPage() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-4xl font-bold text-gray-900">Destinos</h2>
          <SearchContainer />
          <DestinationPage />
          <DestinationForm />
        </div>
      </div>
    </div>
  );
}

export default ContainerPage;
