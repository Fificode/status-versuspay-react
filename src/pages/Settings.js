import SettingsForm from 'components/SettingsForm';


export default function Dashboard() {
    return (
        <>
        <div className="md:ml-64 mt-40">
           

            <div className="px-3 md:px-8 h-auto -mt-14">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 xl:grid-cols-6">
                        <div className="xl:col-start-1 xl:col-end-5 px-4 mb-16">
                            <SettingsForm />
                        </div>
                       
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}
