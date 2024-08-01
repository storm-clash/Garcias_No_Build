import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Content {
  title: string;
  paragraphs: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  // isContentVisible = false;
  // hoveredContent: Content = { title: '', paragraphs: [] };

  // // Define el tipo para el contentMap
  // contentMap: { [key: number]: Content } = {
  //   1: {
  //     title: 'Web Design',
  //     paragraphs: [
  //       'Comprender a su Audiencia: Identificamos sus necesidades para ofrecer soluciones personalizadas.',
  //       'Mostrar el Valor: Destacamos los beneficios únicos de nuestros servicios.',
  //       'Presencia en Línea: Optimizamos su sitio web y mejoramos su visibilidad.',
  //       'Interacción en Redes Sociales: Compartimos contenido relevante y ejecutamos campañas efectivas.',
  //       'Marketing de Contenidos: Publicamos blogs, estudios de caso y recursos útiles.',
  //       'Marketing por Correo Electrónico: Enviamos boletines y seguimientos automatizados.',
  //       'Publicidad Pagada: Utilizamos anuncios en Google y redes sociales.',
  //       'Asociaciones Estratégicas: Colaboramos con empresas e influencers relevantes.',
  //       'Pruebas Gratis: Ofrecemos demostraciones para que experimente nuestro servicio.',
  //       'Testimonios Reales: Construimos confianza con reseñas de clientes satisfechos.',
  //       'Eventos del Sector: Participamos en webinars y conferencias importantes.',
  //       'Análisis y Mejora: Refinamos estrategias basadas en datos para obtener los mejores resultados.'
  //     ]
  //   },
  //   2: {
  //     title: 'Otro Servicio',
  //     paragraphs: [
  //       'Descripción del otro servicio aquí.',
  //       'Más detalles sobre el servicio.'
  //     ]
  //   }
  //   // Añade más entradas según sea necesario
  // };

  // showContent(selector: number) {
  //   this.hoveredContent = this.contentMap[selector];
  //   this.isContentVisible = true;
  // }

  // hideContent() {
  //   this.isContentVisible = false;
  //   this.hoveredContent = { title: '', paragraphs: [] };
  // }
}
