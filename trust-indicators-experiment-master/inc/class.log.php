<?php
require('functions.php');

if ($_POST["log"])
{
		//log results of the poll
		$log = new Log($_POST["action"], $_POST["label"], $_POST["comment"], $_POST["user_id"], $_POST["url"], $_POST["identifier"]);
		$log->WriteToFile();
}


class Log
{
		//define instance variables
		private $ipAddress, $currTime, $action, $label, $comment, $user_id, $identifier;

		function __construct($action, $label, $comment, $user_id, $url, $identifier)
		{
				//set instance variables
				$this->user_id = $user_id;
				$this->url = $url;
				$this->identifier = $identifier;
				$this->ipAddress = get_the_ip();
				$this->currTime = date("m/d/Y g:i:s A",time()-18000);
				$this->action = str_replace("|", "&#124;", filter_var($action, FILTER_SANITIZE_STRING));
				$this->comment = str_replace("|", "&#124;", filter_var($comment, FILTER_SANITIZE_STRING));
				$this->label = $label;
				$this->rootDir = '../';
		}


		function WriteToFile() {
			$logPath = array(
							$this->rootDir . "/logs/log.csv",
						);

			//loop through log files
			foreach($logPath as $log) {
			  //open file with append
				$logFile = fopen($log, 'a') or die("A problem has occurred. Please contact administrator.");

				$logText = $this->url."|".$this->identifier . "|" .$this->user_id . "|" . $this->ipAddress . "|" . $this->currTime . "|" . $this->action . "|" . $this->label . "|" . $this->comment . "\n";

				//write to file
				fwrite($logFile, $logText);

				//close file
				fclose($logFile);
			}
		}

}

?>
