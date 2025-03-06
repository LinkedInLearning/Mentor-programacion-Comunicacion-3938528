import React from 'react';

const PageHome: React.FC = () => {
    return (
        <>
            <section className="bg-white vh-100">
                <div className="container">
                    <div className="text-center d-flex justify-content-center">
                        <div className="col-12 col-md-8">
                            <h3 className="mb-2">Nuestros Paquetes</h3>
                            <h6 className="fw-normal text-gray-500">Elige el paquete que mejor se adapte a tus necesidades y disfruta de beneficios exclusivos. Desde el Pack Básico hasta el Pack Avanzado, tenemos algo para todos.</h6>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center pt-4">
                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm">
                                <div className="card-header py-3">
                                    <h4 className="my-0 fw-normal">Básico</h4>
                                </div>
                                <div className="card-body">
                                    <h4>€10</h4>
                                    <p className="card-text small">Pack Básico: Incluye acceso a ofertas exclusivas y descuentos en tiendas seleccionadas.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm">
                                <div className="card-header py-3">
                                    <h4 className="my-0 fw-normal">Intermedio</h4>
                                </div>
                                <div className="card-body">
                                    <h4>€20</h4>
                                    <p className="card-text small">Pack Intermedio: Incluye todos los beneficios del Pack Básico más envío gratuito en compras online.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm">
                                <div className="card-header py-3">
                                    <h4 className="my-0 fw-normal">Avanzado</h4>
                                </div>
                                <div className="card-body">
                                    <h4>€30</h4>
                                    <p className="card-text small">Pack Avanzado:  Pack Intermedio más acceso a eventos exclusivos y soporte prioritario.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PageHome;