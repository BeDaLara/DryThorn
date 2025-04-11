import { useState, useEffect } from 'react';
import './ModalPromo.css';

const ModalPromo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // Verifica se o modal já foi fechado antes
    const modalClosed = localStorage.getItem('modalPromoClosed');
    if (!modalClosed) {
      // Mostra o modal após 1 segundo (pode ajustar)
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Marca como fechado no localStorage para não mostrar novamente
    localStorage.setItem('modalPromoClosed', 'true');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulação de envio para API (substitua por sua lógica real)
    setTimeout(() => {
      console.log('Email cadastrado:', email);
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Fecha o modal após 3 segundos
      setTimeout(() => {
        handleClose();
      }, 3000);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="modal-close" onClick={handleClose}>
          &times;
        </button>
        
        {!isSuccess ? (
          <>
            <div className="modal-header">
              <h2>Promoção de Primeira Tatuagem!</h2>
            </div>
            <div className="modal-body">
              <p>
                Ganhe <strong>10% de desconto</strong> na sua primeira tatuagem no Drythorn Studio!
                Cadastre seu e-mail abaixo e enviaremos um cupom exclusivo.
              </p>
              <form onSubmit={handleSubmit} className="modal-form">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Enviando...' : 'Quero meu desconto!'}
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="modal-success">
            <h3>Obrigado!</h3>
            <p>Enviamos seu cupom de desconto para <strong>{email}</strong>.</p>
            <p>Verifique sua caixa de entrada e spam.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalPromo;