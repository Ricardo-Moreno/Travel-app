import DestinationPage from "../DestinationPage/DestinationPage";

function ContainerPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <DestinationPage />
        </div>
      </div>
    </div>
  );
}

export default ContainerPage;
