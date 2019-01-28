

const lazyLoad = async (req, res, next) => {
  try {
    const lazyDefault = {
      offset: 1,
      limit: 5,
      orderBy: 'CreatedAt'
    }
    if( req.query.page && req.query.count && req.query.order ) {
      lazyDefault.limit = req.query.count
      lazyDefault.offset = Number(req.query.count) * (Number(req.query.page) - 1)
      lazyDefault.orderBy = req.query.order 
    }

    res.locals.lazyload = lazyDefault
    next()

  } catch (error) {
    next(error)
  }
}
module.exports =  lazyLoad 