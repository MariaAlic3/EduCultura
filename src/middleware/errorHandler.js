const errorHandler = (err, req, res, next) => {
    console.error('Erro capturado:', {
        message: err.message,
        stack: err.stack,
    });

    res.status(err.status || 500).json({
        message: err.message || 'Ocorreu um erro no servidor!',
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined, // Exibe a stack apenas em desenvolvimento
    });
};

export { errorHandler };
