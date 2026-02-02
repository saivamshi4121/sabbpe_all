import { ServicesInteractive } from './ServicesInteractive';
import ServicesFAQ from './ServicesFAQ';

export default function ServicesPage() {
    return (
        <div className="relative bg-background">
            <ServicesInteractive />
            <ServicesFAQ />
        </div>
    );
}
