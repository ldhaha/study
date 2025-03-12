def initialize(context)
run daily(period,time='every bar')g.security ='000001.XSHE
def period(context):
#买入股票
order(g.security，100)
#获得股票持仓成本
cost=context.portfolio.positions['000001.XSHE'].avg_cost
#获得股票现价
price=context.portfolio.positions['000001.XSHE'].price
#计算收益率
ret=price/cost-1
#打印日志
print('成本价:%s'% cost)
print('现价:%s'% price)
print('收益率:%s'% ret)
#如果收益率小于-0.01，即亏损达到1%则卖出股票·幅度可以自己调·一般10%
if ret<-0.01:
order target('000001.XSHE',0)print('触发止损')