require 'cucumber'
require 'cucumber/rake/task'

namespace :hudson do
  
  def report_path
    "test-reports/features/"
  end

  task :report_setup do
    rm_rf report_path
    mkdir_p report_path
  end

  Cucumber::Rake::Task.new({:cucumber  => [:report_setup]}) do |t|
    t.cucumber_opts = %{--profile default  --format junit --out #{report_path} --format html --out #{report_path}/report.html}
  end
  
  task :spec do
    sh "java -jar spec/support/js.jar -opt -1 spec/rhino.js"
  end

end
