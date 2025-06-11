import * as React from 'react';
import {Moon, Sun} from 'lucide-react';

import {Button} from '@/components/ui/button';

export function ModeToggle() {
    const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

    // Sincroniza com o atributo data-theme mesmo se for alterado por fora
    React.useEffect(() => {
        const html = document.documentElement;
        const updateTheme = () => {
            const current = html.getAttribute('data-theme');
            if (current === 'dark' || current === 'light') {
                setTheme(current);
            }
        };

        updateTheme(); // chamada inicial

        const observer = new MutationObserver(() => updateTheme());
        observer.observe(html, {attributes: true, attributeFilter: ['data-theme']});

        return () => observer.disconnect();
    }, []);

    // Aplica data-theme sempre que o estado local mudar
    React.useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <Button onClick={toggleTheme} variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
