class Account
  def initialize(owner, balance)
    @owner = owner
    @balance = balance
    @type = :checking
  end

  def deposit(amount)
    @balance = @balance + amount
  end

  def withdraw(amount)
    if @balance >= amount
      @balance -= amount
      puts "Your new balance is: #{@balance}. Enjoy $#{amount}."
    else
      puts "Ruh roh. Your balance cannot support that withdrawal."
    end
  end

  def same_owner?(other_account)
    self.owner == other_account.owner
  end

  def balance
    @balance
  end

  def owner
    @owner
  end

  def type=(new_account_type)
    @type = new_account_type
  end

  def type
    @type
  end

  def show_balance
    puts "Your balance is: #{@balance}"
  end
end
