import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';

import { Week } from '../../components/Week/Week';
import { Task411 } from '../../tasks/Task411/Task411';
import { Task412 } from '../../tasks/Task412/Task412';
import { Task413 } from '../../tasks/Task413/Task413';

export class Week4 extends Week {

    weekName = 'Неделя 4. Типы распределений случайных величин';

    protected renderContent() {
        return (
            <Accordion multiple>
                <AccordionTab header="Упражнение 1. Задача 1"><Task411 /></AccordionTab>
                <AccordionTab header="Упражнение 1. Задача 2"><Task412 /></AccordionTab>
                <AccordionTab header="Упражнение 1. Задача 3"><Task413 /></AccordionTab>
                <AccordionTab disabled header="Упражнение 2. Задача 1 (coming soon)" />
                <AccordionTab disabled header="Упражнение 2. Задача 2 (coming soon)" />
                <AccordionTab disabled header="Упражнение 2. Задача 3 (coming soon)" />
                <AccordionTab disabled header="Упражнение 3. Задача 1 (coming soon)" />
                <AccordionTab disabled header="Упражнение 3. Задача 2 (coming soon)" />
            </Accordion>
        );
    }
}
